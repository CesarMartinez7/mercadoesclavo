export interface ItemInterface {
    id:                               string;
    site_id:                          string;
    title:                            string;
    seller_id:                        number;
    category_id:                      string;
    official_store_id:                null;
    price:                            number;
    base_price:                       number;
    original_price:                   null;
    currency_id:                      string;
    initial_quantity:                 number;
    sale_terms:                       unknown[];
    buying_mode:                      string;
    listing_type_id:                  string;
    condition:                        string;
    permalink:                        string;
    thumbnail_id:                     string;
    thumbnail:                        string;
    pictures:                         Picture[];
    video_id:                         null;
    descriptions:                     unknown[];
    accepts_mercadopago:              boolean;
    non_mercado_pago_payment_methods: unknown[];
    shipping:                         Shipping;
    international_delivery_mode:      string;
    seller_address:                   SellerAddress;
    seller_contact:                   null;
    location:                         Location;
    coverage_areas:                   unknown[];
    attributes:                       Attribute[];
    listing_source:                   string;
    variations:                       Variation[];
    status:                           string;
    sub_status:                       unknown[];
    tags:                             string[];
    warranty:                         null;
    catalog_product_id:               null;
    domain_id:                        string;
    parent_item_id:                   null;
    deal_ids:                         unknown[];
    automatic_relist:                 boolean;
    date_created:                     Date;
    last_updated:                     Date;
    health:                           number;
    catalog_listing:                  boolean;
}

export interface Attribute {
    id:         string;
    name:       string;
    value_id:   null | string;
    value_name: string;
    values:     Value[];
    value_type: ValueType;
}

export enum ValueType {
    GridID = "grid_id",
    List = "list",
    String = "string",
}

export interface Value {
    id:     null | string;
    name:   string;
    struct: null;
}

export interface Location {
}

export interface Picture {
    id:         string;
    url:        string;
    secure_url: string;
    size:       string;
    max_size:   string;
    quality:    string;
}

export interface SellerAddress {
    city:            City;
    state:           Country;
    country:         Country;
    search_location: SearchLocation;
    id:              number;
}

export interface City {
    name: string;
}

export interface Country {
    id:   string;
    name: string;
}

export interface SearchLocation {
    neighborhood: Country;
    city:         Country;
    state:        Country;
}

export interface Shipping {
    mode:          string;
    methods:       unknown[];
    tags:          unknown[];
    dimensions:    null;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}

export interface Variation {
    id:                     number;
    price:                  number;
    attribute_combinations: Attribute[];
    sale_terms:             unknown[];
    picture_ids:            string[];
    catalog_product_id:     null;
}
