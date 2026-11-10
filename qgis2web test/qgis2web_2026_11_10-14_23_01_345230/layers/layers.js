var wms_layers = [];

var format_nycage_0 = new ol.format.GeoJSON();
var features_nycage_0 = format_nycage_0.readFeatures(json_nycage_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nycage_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nycage_0.addFeatures(features_nycage_0);
var lyr_nycage_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nycage_0, 
                style: style_nycage_0,
                popuplayertitle: 'nyc-age',
                interactive: true,
                title: '<img src="styles/legend/nycage_0.png" /> nyc-age'
            });
var format_over85yrs_1 = new ol.format.GeoJSON();
var features_over85yrs_1 = format_over85yrs_1.readFeatures(json_over85yrs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_over85yrs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_over85yrs_1.addFeatures(features_over85yrs_1);
var lyr_over85yrs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_over85yrs_1, 
                style: style_over85yrs_1,
                popuplayertitle: 'over 85 yrs',
                interactive: true,
                title: '<img src="styles/legend/over85yrs_1.png" /> over 85 yrs'
            });
var format_under10yrsold_2 = new ol.format.GeoJSON();
var features_under10yrsold_2 = format_under10yrsold_2.readFeatures(json_under10yrsold_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_under10yrsold_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_under10yrsold_2.addFeatures(features_under10yrsold_2);
var lyr_under10yrsold_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_under10yrsold_2, 
                style: style_under10yrsold_2,
                popuplayertitle: 'under 10 yrs old',
                interactive: true,
                title: '<img src="styles/legend/under10yrsold_2.png" /> under 10 yrs old'
            });

lyr_nycage_0.setVisible(true);lyr_over85yrs_1.setVisible(true);lyr_under10yrsold_2.setVisible(true);
var layersList = [lyr_nycage_0,lyr_over85yrs_1,lyr_under10yrsold_2];
lyr_nycage_0.set('fieldAliases', {'fid': 'fid', 'GISJOIN': 'GISJOIN', 'under10': 'under10', '10_to_17': '10_to_17', '18_to_24': '18_to_24', '25_to_34': '25_to_34', '35_to_44': '35_to_44', '45_to_54': '45_to_54', '55_to_64': '55_to_64', '65_to_74': '65_to_74', '75_to_84': '75_to_84', '85_and_over': '85_and_over', });
lyr_over85yrs_1.set('fieldAliases', {'rand_point_id': 'rand_point_id', 'fid': 'fid', 'GISJOIN': 'GISJOIN', 'under10': 'under10', '10_to_17': '10_to_17', '18_to_24': '18_to_24', '25_to_34': '25_to_34', '35_to_44': '35_to_44', '45_to_54': '45_to_54', '55_to_64': '55_to_64', '65_to_74': '65_to_74', '75_to_84': '75_to_84', '85_and_over': '85_and_over', });
lyr_under10yrsold_2.set('fieldAliases', {'rand_point_id': 'rand_point_id', 'fid': 'fid', 'GISJOIN': 'GISJOIN', 'under10': 'under10', '10_to_17': '10_to_17', '18_to_24': '18_to_24', '25_to_34': '25_to_34', '35_to_44': '35_to_44', '45_to_54': '45_to_54', '55_to_64': '55_to_64', '65_to_74': '65_to_74', '75_to_84': '75_to_84', '85_and_over': '85_and_over', });
lyr_nycage_0.set('fieldImages', {'fid': '', 'GISJOIN': '', 'under10': '', '10_to_17': '', '18_to_24': '', '25_to_34': '', '35_to_44': '', '45_to_54': '', '55_to_64': '', '65_to_74': '', '75_to_84': '', '85_and_over': '', });
lyr_over85yrs_1.set('fieldImages', {'rand_point_id': '', 'fid': '', 'GISJOIN': '', 'under10': '', '10_to_17': '', '18_to_24': '', '25_to_34': '', '35_to_44': '', '45_to_54': '', '55_to_64': '', '65_to_74': '', '75_to_84': '', '85_and_over': '', });
lyr_under10yrsold_2.set('fieldImages', {'rand_point_id': '', 'fid': '', 'GISJOIN': '', 'under10': '', '10_to_17': '', '18_to_24': '', '25_to_34': '', '35_to_44': '', '45_to_54': '', '55_to_64': '', '65_to_74': '', '75_to_84': '', '85_and_over': '', });
lyr_nycage_0.set('fieldLabels', {'fid': 'no label', 'GISJOIN': 'no label', 'under10': 'no label', '10_to_17': 'no label', '18_to_24': 'no label', '25_to_34': 'no label', '35_to_44': 'no label', '45_to_54': 'no label', '55_to_64': 'no label', '65_to_74': 'no label', '75_to_84': 'no label', '85_and_over': 'no label', });
lyr_over85yrs_1.set('fieldLabels', {'rand_point_id': 'no label', 'fid': 'no label', 'GISJOIN': 'no label', 'under10': 'no label', '10_to_17': 'no label', '18_to_24': 'no label', '25_to_34': 'no label', '35_to_44': 'no label', '45_to_54': 'no label', '55_to_64': 'no label', '65_to_74': 'no label', '75_to_84': 'no label', '85_and_over': 'no label', });
lyr_under10yrsold_2.set('fieldLabels', {'rand_point_id': 'no label', 'fid': 'no label', 'GISJOIN': 'no label', 'under10': 'no label', '10_to_17': 'no label', '18_to_24': 'no label', '25_to_34': 'no label', '35_to_44': 'no label', '45_to_54': 'no label', '55_to_64': 'no label', '65_to_74': 'no label', '75_to_84': 'no label', '85_and_over': 'no label', });
lyr_under10yrsold_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});