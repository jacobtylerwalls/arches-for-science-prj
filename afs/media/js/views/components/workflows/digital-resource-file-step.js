define([
    'underscore',
    'jquery',
    'arches',
    'knockout',
    'knockout-mapping',
    'views/components/workflows/new-tile-step',
    'bindings/select2-query',
], function(_, $, arches, ko, koMapping, NewTileStep) {

    function viewModel(params) {
        if (!params.resourceid()) {
            params.resourceid(params.workflow.state.steps[0].digitalresourceid);
        }
        NewTileStep.apply(this, [params]);
        var self = this;
        this.card.subscribe(function(val) {
            if(val.tiles != undefined) {
                val.tiles.subscribe(function(arr) {
                    if (arr.length > 0) {
                        arr[0].save(null, function(){
                            self.onSaveSuccess(arr[0]);
                        }, this);
                    }
                });
            }
        });

        params.defineStateProperties = function(){
            return {
                resourceid: ko.unwrap(params.resourceid) || this.workflow.state.resourceid,
                tile: !!(ko.unwrap(params.tile)) ? koMapping.toJS(params.tile().data) : undefined,
                tileid: !!(ko.unwrap(params.tile)) ? ko.unwrap(params.tile().tileid): undefined,
            };
        };
    }

    ko.components.register('digital-resource-file-step', {
        viewModel: viewModel,
        template: { require: 'text!templates/views/components/workflows/new-tile-step.htm' }
    });
    return viewModel;
});
