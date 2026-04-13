var wms_layers = [];


        var lyr_1_0 = new ol.layer.Tile({
            'title': '1',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_InitialMapping_1 = new ol.format.GeoJSON();
var features_InitialMapping_1 = format_InitialMapping_1.readFeatures(json_InitialMapping_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InitialMapping_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InitialMapping_1.addFeatures(features_InitialMapping_1);
cluster_InitialMapping_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_InitialMapping_1
});
var lyr_InitialMapping_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_InitialMapping_1, 
                style: style_InitialMapping_1,
                popuplayertitle: 'Initial Mapping',
                interactive: true,
                title: 'Initial Mapping'
            });

lyr_1_0.setVisible(true);lyr_InitialMapping_1.setVisible(true);
var layersList = [lyr_1_0,lyr_InitialMapping_1];
lyr_InitialMapping_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_callouts_originx': 'auxiliary_storage_callouts_originx', 'auxiliary_storage_callouts_originy': 'auxiliary_storage_callouts_originy', 'auxiliary_storage_callouts_destinationx': 'auxiliary_storage_callouts_destinationx', 'auxiliary_storage_callouts_destinationy': 'auxiliary_storage_callouts_destinationy', });
lyr_InitialMapping_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_callouts_originx': '', 'auxiliary_storage_callouts_originy': '', 'auxiliary_storage_callouts_destinationx': '', 'auxiliary_storage_callouts_destinationy': '', });
lyr_InitialMapping_1.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'inline label - always visible', 'end': 'inline label - visible with data', 'altitudeMode': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', 'auxiliary_storage_callouts_originx': 'inline label - always visible', 'auxiliary_storage_callouts_originy': 'inline label - always visible', 'auxiliary_storage_callouts_destinationx': 'inline label - always visible', 'auxiliary_storage_callouts_destinationy': 'inline label - always visible', });
lyr_InitialMapping_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});