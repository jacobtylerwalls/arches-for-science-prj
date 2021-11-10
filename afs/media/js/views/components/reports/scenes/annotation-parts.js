define([
    'knockout', 
    'geojson-extent',
    'leaflet',
    'utils/report',
    'viewmodels/widget',
    'views/components/iiif-viewer',
    'bindings/leaflet',
    'bindings/datatable'
], function(ko, geojsonExtent, L, reportUtils) {
    return ko.components.register('views/components/reports/scenes/annotation-parts', {
        viewModel: function(params) {
            var self = this;

            Object.assign(self, reportUtils);
            self.maps = ko.observableArray();
            self.selectedAnnotationTileId = params.selectedAnnotationTileId || ko.observable();
            self.annotations = [];

            self.prepareAnnotation = function(featureCollection) {
                var canvas = featureCollection.features[0].properties.canvas;

                var afterRender = function(map) {
                    L.tileLayer.iiif(canvas + '/info.json').addTo(map);
                    var extent = geojsonExtent(featureCollection);
                    map.addLayer(L.geoJson(featureCollection, {
                        pointToLayer: function(feature, latlng) {
                            return L.circleMarker(latlng, feature.properties);
                        },
                        style: function(feature) {
                            return feature.properties;
                        },
                        onEachFeature: function(feature, layer) {
                            layer.on('click', function() {
                                if (feature.properties && feature.properties.tileId){
                                    self.selectedAnnotationTileId(feature.properties.tileId);
                                }
                            });
                        }
                    }));
                    L.control.fullscreen().addTo(map);
                    setTimeout(function() {
                        map.fitBounds([
                            [extent[1]-1, extent[0]-1],
                            [extent[3]+1, extent[2]+1]
                        ]);
                    }, 250);
                    self.maps.push(map);
                };

                return {
                    center: [0, 0],
                    crs: L.CRS.Simple,
                    zoom: 0,
                    afterRender: afterRender
                };
            };

            let annotationCollection = {};
            params.annotation.featureCollection.features.forEach(function(feature){
                const canvas = feature.properties.canvas;
                if (canvas in annotationCollection) {
                    annotationCollection[canvas].push(feature);
                } else {
                    annotationCollection[canvas] = [feature];
                }
            });
            for (const canvas in annotationCollection){
                let annotationCombined = {
                    type: "FeatureCollection",
                    features: []
                };
                annotationCollection[canvas].forEach(function(annotation){
                    annotationCombined.features.push(annotation);
                });
                const leafletConfig = this.prepareAnnotation(annotationCombined);
                self.annotations.push({
                    leafletConfig: leafletConfig,
                });
            }

            self.selectedAnnotationTileId.subscribe(tileId => {
                if (self.maps()) {
                    self.maps().forEach(function(map){
                        map.eachLayer(function(layer){
                            if (layer.eachLayer) {
                                layer.eachLayer(function(feature){
                                    const defaultColor = feature.feature.properties.color;

                                    if (tileId === feature.feature.properties.tileId) {
                                        feature.setStyle({color: '#BCFE2B', fillColor: '#BCFE2B'});
                                    } else {
                                        feature.setStyle({color: defaultColor, fillColor: defaultColor});
                                    }
                                });
                            }
                        });
                    });
                }
            });
        },
        template: {
            require: 'text!templates/views/components/reports/scenes/annotation-parts.htm'
        }
    });
});
