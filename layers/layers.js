var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Persentasesumberairminum2023_1 = new ol.format.GeoJSON();
var features_Persentasesumberairminum2023_1 = format_Persentasesumberairminum2023_1.readFeatures(json_Persentasesumberairminum2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Persentasesumberairminum2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Persentasesumberairminum2023_1.addFeatures(features_Persentasesumberairminum2023_1);
var lyr_Persentasesumberairminum2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Persentasesumberairminum2023_1, 
                style: style_Persentasesumberairminum2023_1,
                popuplayertitle: "Persentase sumber air minum 2023",
                interactive: true,
    title: 'Persentase sumber air minum 2023<br />\
    <img src="styles/legend/Persentasesumberairminum2023_1_0.png" /> 66.5 - 78.6<br />\
    <img src="styles/legend/Persentasesumberairminum2023_1_1.png" /> 78.6 - 86.6<br />\
    <img src="styles/legend/Persentasesumberairminum2023_1_2.png" /> 86.6 - 90.8<br />\
    <img src="styles/legend/Persentasesumberairminum2023_1_3.png" /> 90.8 - 94.2<br />\
    <img src="styles/legend/Persentasesumberairminum2023_1_4.png" /> 94.2 - 99.4<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Persentasesumberairminum2023_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Persentasesumberairminum2023_1];
lyr_Persentasesumberairminum2023_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'OBJEKTID': 'OBJEKTID', });
lyr_Persentasesumberairminum2023_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'OBJEKTID': 'TextEdit', });
lyr_Persentasesumberairminum2023_1.set('fieldLabels', {'PROVINSI': 'no label', 'OBJEKTID': 'no label', });
lyr_Persentasesumberairminum2023_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});