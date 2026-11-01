var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "600", //'700' or 'responsive'
    background_color: "#000000",
    border_color: "##363636",
    
    //State defaults
    state_description: "State description",
    state_color: "#363636",
    state_hover_color: "#363636",
    state_url: "",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: "",
    location_type: "",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#88A4BC",
    label_hover_color: "#3B729F",
    label_size: "0",
    label_font: "Times New Roman",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.7,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_size: ""
  },
  state_specific: {
    BRAC: {
    description: " ",
    name: "Acre",
    url: "/regioes/norte"
},

BRAL: {
    description: " ",
    name: "Alagoas",
    url: "/regioes/nordeste"
},

BRAM: {
    description: " ",
    name: "Amazonas",
    url: "/regioes/norte"
},

BRAP: {
    description: " ",
    name: "Amapá",
    url: "/regioes/norte"
},

BRBA: {
    description: " ",
    name: "Bahia",
    url: "/regioes/nordeste"
},

BRCE: {
    description: " ",
    name: "Ceará",
    url: "/regioes/nordeste"
},

BRDF: {
    description: " ",
    name: "Distrito Federal",
    url: "/regioes/centro_oeste"
},

BRES: {
    description: " ",
    name: "Espírito Santo",
    url: "/regioes/sudeste"
},

BRGO: {
    description: " ",
    name: "Goiás",
    url: "/regioes/centro_oeste"
},

BRMA: {
    description: " ",
    name: "Maranhão",
    url: "/regioes/nordeste"
},

BRMG: {
    description: " ",
    name: "Minas Gerais",
    url: "/regioes/sudeste"
},

BRMS: {
    description: " ",
    name: "Mato Grosso do Sul",
    url: "/regioes/centro_oeste"
},

BRMT: {
    description: " ",
    name: "Mato Grosso",
    url: "/regioes/centro_oeste"
},

BRPA: {
    description: " ",
    name: "Pará",
    url: "/regioes/norte"
},

BRPB: {
    description: " ",
    name: "Paraíba",
    url: "/regioes/nordeste"
},

BRPE: {
    description: " ",
    name: "Pernambuco",
    url: "/regioes/nordeste"
},

BRPI: {
    description: " ",
    name: "Piauí",
    url: "/regioes/nordeste"
},

BRPR: {
    description: " ",
    name: "Paraná",
    url: "/regioes/sul"
},

BRRJ: {
    description: " ",
    name: "Rio de Janeiro",
    url: "/regioes/sudeste"
},

BRRN: {
    description: " ",
    name: "Rio Grande do Norte",
    url: "/regioes/nordeste"
},

BRRO: {
    description: " ",
    name: "Rondônia",
    url: "/regioes/norte"
},

BRRR: {
    description: " ",
    name: "Roraima",
    url: "/regioes/norte"
},

BRRS: {
    description: " ",
    name: "Rio Grande do Sul",
    url: "/regioes/sul"
},

BRSC: {
    description: " ",
    name: "Santa Catarina",
    url: "/regioes/sul"
},

BRSE: {
    description: " ",
    name: "Sergipe",
    url: "/regioes/nordeste"
},

BRSP: {
    description: " ",
    name: "São Paulo",
    url: "/regioes/sudeste"
},

BRTO: {
    description: " ",
    name: "Tocantins",
    url: "/regioes/norte"
}
  },
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [
        "BRMA",
        "BRPI",
        "BRCE",
        "BRRN",
        "BRPB",
        "BRPE",
        "BRAL",
        "BRSE",
        "BRBA"
      ],
      name: "Nordeste",
      hover_color: "#ff8c00",
      color: "#363636",
      zoomable: "no",
      url: "/regioes/nordeste"
    },
    "1": {
      states: [
        "BRAC",
        "BRAP",
        "BRAM",
        "BRPA",
        "BRRO",
        "BRRR",
        "BRTO"
      ],
      name: "Norte",
      hover_color: "#27cf11",
      color: "#363636",
      zoomable: "no",
      url: "/regioes/norte"
    },
    "2": {
      states: [
        "BRGO",
        "BRMT",
        "BRMS",
        "BRDF"
      ],
      name: "Centro-Oeste",
      hover_color: "#ffee00",
      color: "#363636",
      zoomable: "no",
      url: "/regioes/centro_oeste"
    },
    "3": {
      states: [
        "BRSP",
        "BRRJ",
        "BRMG",
        "BRES"
      ],
      name: "Sudeste",
      hover_color: "#ec1818",
      color: "#363636",
      zoomable: "no",
      url: "/regioes/sudeste"
    },
    "4": {
      states: [
        "BRPR",
        "BRSC",
        "BRRS"
      ],
      name: "Sul",
      hover_color: "#0044ff",
      color: "#363636",
      zoomable: "no",
      url: "/regioes/sul"
    }
  }
};