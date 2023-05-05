define([
    'jquery',
    'js-cookie',
    'knockout',
    'arches',
    'templates/views/components/workflows/project-report-workflow/download-project-files.htm',
], function($, Cookies, ko, arches, downloadFilesTemplate) {
    function viewModel(params) {
        var self = this;

        this.projectValue = params.projectId;

        const collectionGraphId = '1b210ef3-b25c-11e9-a037-a4d18cec433a';
        const physicalThingGraphId = '9519cb4f-b25b-11e9-8c7b-a4d18cec433a';
        const digitalResourcegGraphId = '707cbd78-ca7a-11e9-990b-a4d18cec433a';
        const fileNodeId = '7c486328-d380-11e9-b88e-a4d18cec433a';
        this.relatedPhysicalThings = ko.observableArray();
        this.message = ko.observable();

        this.ready = ko.computed(() => {
            return self.relatedPhysicalThings().find((thing) => {
                return !!thing.relatedFiles.find(file => file.selected() == true );
            });
        });

        this.formatSize = function(size) {
            var bytes = size;
            if(bytes == 0) return '0 Byte';
            var k = 1024;
            var dm = 2;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return '(' + '<strong>' + parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + '</strong>' + sizes[i] + ')';
        };

        this.expandAll = function(bool) {
            self.relatedPhysicalThings().forEach((thing) => {
                thing.expanded(bool);
            });
        };

        this.selectAll = function(bool) {
            self.relatedPhysicalThings().forEach((thing) => {
                thing.relatedFiles.forEach(file => file.selected(bool));
            });
            self.expandAll(true);
        };

        this.getFilesFromCollection = async() => {
            let projectCollection, physicalThings, physicalThing, digitalResources, relatedFiles;
            
            await window.fetch(arches.urls.related_resources + self.projectValue  + "?paginate=false")
                .then(response => response.json())
                .then(json => {
                    self.projectName = json.resource_instance.displayname;
                    projectCollection = json.related_resources.find(res => res.graph_id == collectionGraphId);
                });
            await window.fetch(arches.urls.related_resources + projectCollection.resourceinstanceid  + "?paginate=false")
                .then(response => response.json())
                .then(json => {
                    physicalThings = json.related_resources.filter(res => res.graph_id == physicalThingGraphId);
                });
            for (const thing of physicalThings) {
                await window.fetch(arches.urls.related_resources + thing.resourceinstanceid  + "?paginate=false")
                    .then(response => response.json())
                    .then(json => {
                        physicalThing = json.resource_instance;
                        physicalThing.expanded = ko.observable();
                        digitalResources = json.related_resources.filter(res => res.graph_id == digitalResourcegGraphId);
                        relatedFiles = digitalResources.reduce((acc1, res) => 
                            acc1.concat(res.tiles.reduce((acc2, tile) => {
                                if (tile.nodegroup_id == fileNodeId){
                                    acc2 = acc2.concat(tile.data[fileNodeId].map(data => {
                                        data.selected = ko.observable();
                                        return data;
                                    }));
                                }
                                return acc2;
                            }, [])),
                        []);
                    });
                self.relatedPhysicalThings.push({ ...physicalThing, relatedFiles});
                self.relatedPhysicalThings.sort((a,b) => b.relatedFiles.length - a.relatedFiles.length);
            }
        };
        this.getFilesFromCollection();
        
        this.downloadFiles = () => {
            if (!self.ready()) {
                return;
            }
            const files = self.relatedPhysicalThings().reduce(
                (acc, thing) => acc.concat(thing.relatedFiles.filter(
                    file => file.selected())), [])
                .map(file => {
                    return {'name': file.name, 'fileid': file.file_id, 'project': self.projectName};
                });
            const formData = new window.FormData();

            formData.append('files', JSON.stringify(files));
            window.fetch(arches.urls.download_project_files, {
                method: 'POST', 
                credentials: 'include',
                body: formData,
                headers: {
                    "X-CSRFToken": Cookies.get('csrftoken')
                }
            }).then((response) => response.json())
                .then((json) => self.message(json.message));
        };
    }

    ko.components.register('download-project-files', {
        viewModel: viewModel,
        template: downloadFilesTemplate
    });
    return viewModel;
});
