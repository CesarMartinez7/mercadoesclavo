export interface Response {
    site_id:                   SiteID;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   Result[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   Filter[];
    available_filters:         AvailableFilter[];
    pdp_tracking:              PDPTracking;
    user_context:              null;
    ranking_introspection:     unknown;
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   AvailableFilterType;
    values: AvailableFilterValue[];
}

export enum AvailableFilterType {
    Boolean = "boolean",
    Number = "number",
    Range = "range",
    String = "STRING",
    Text = "text",
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   string;
    name: string;
}

export interface Filter {
    id:     string;
    name:   string;
    type:   AvailableFilterType;
    values: FilterValue[];
}

export interface FilterValue {
    id:             string;
    name:           string;
    path_from_root: Sort[];
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface PDPTracking {
    group:        boolean;
    product_info: ProductInfo[];
}

export interface ProductInfo {
    id:     string;
    score:  number;
    status: Status;
}

export enum Status {
    Shown = "shown",
}



export interface Result {
    id:                    string;
    title:                 string;
    condition:             Condition;
    thumbnail_id:          string;
    catalog_product_id:    null | string;
    listing_type_id:       ListingTypeID;
    sanitized_title:       string;
    permalink:             string;
    buying_mode:           BuyingMode;
    site_id:               SiteID;
    category_id:           CategoryID;
    domain_id:             DomainID;
    thumbnail:             string;
    currency_id:           CurrencyID;
    order_backend:         number;
    price:                 number;
    original_price:        number | null;
    sale_price:            SalePrice;
    available_quantity:    number;
    official_store_id:     number | null;
    use_thumbnail_id:      boolean;
    accepts_mercadopago:   boolean;
    shipping:              Shipping;
    stop_time:             Date;
    seller:                Seller;
    address:               Address;
    attributes:            ResultAttribute[];
    installments:          Installments;
    winner_item_id:        null;
    catalog_listing:       boolean;
    discounts:             null;
    promotion_decorations: null;
    promotions:            null;
    inventory_id:          null | string;
    installments_motors:   null;
    variation_id?:         string;
    variations_data?:      { [key: string]: VariationsDatum };
    official_store_name?:  string;
}

export interface Address {
    state_id:   StateID;
    state_name: StateName;
    city_id:    null | string;
    city_name:  string;
}

export enum StateID {
    ArB = "AR-B",
    ArC = "AR-C",
}

export enum StateName {
    BuenosAires = "Buenos Aires",
    CapitalFederal = "Capital Federal",
}

export interface ResultAttribute {
    id:                   ID;
    name:                 Name;
    value_id:             null | string;
    value_name:           null | string;
    attribute_group_id:   AttributeGroupID;
    attribute_group_name: AttributeGroupName;
    value_struct:         Struct | null;
    values:               AttributeValue[];
    source:               number;
    value_type:           Value;
}

export enum AttributeGroupID {
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Otros = "Otros",
}

export enum ID {
    AlphanumericModel = "ALPHANUMERIC_MODEL",
    Brand = "BRAND",
    Gtin = "GTIN",
    IsHighlightBrand = "IS_HIGHLIGHT_BRAND",
    IsTomBrand = "IS_TOM_BRAND",
    ItemCondition = "ITEM_CONDITION",
    Line = "LINE",
    Model = "MODEL",
    PackageLength = "PACKAGE_LENGTH",
    PackageWeight = "PACKAGE_WEIGHT",
    RecommendedAgeGroup = "RECOMMENDED_AGE_GROUP",
    Weight = "WEIGHT",
}

export enum Name {
    CondiciónDelÍtem = "Condición del ítem",
    CódigoUniversalDeProducto = "Código universal de producto",
    EdadRecomendada = "Edad recomendada",
    EsMarcaDestacada = "Es marca destacada",
    EsMarcaTOM = "Es marca TOM",
    LargoDelPaquete = "Largo del paquete",
    Línea = "Línea",
    Marca = "Marca",
    Modelo = "Modelo",
    ModeloAlfanumérico = "Modelo alfanumérico",
    Peso = "Peso",
    PesoDelPaquete = "Peso del paquete",
}

export interface Struct {
    number: number;
    unit:   Unit;
}

export enum Unit {
    CM = "cm",
    G = "g",
    Kg = "kg",
    LB = "lb",
}

export enum Value {
    Boolean = "boolean",
    List = "list",
    NumberUnit = "number_unit",
    String = "string",
}

export interface AttributeValue {
    id:     null | string;
    name:   null | string;
    struct: Struct | null;
    source: number;
}

export enum BuyingMode {
    BuyItNow = "buy_it_now",
}

export enum CategoryID {
    Mla3422 = "MLA3422",
    Mla432889 = "MLA432889",
}

export enum Condition {
    New = "new",
}

export enum CurrencyID {
    Ars = "ARS",
}

export enum DomainID {
    MlaActionFigures = "MLA-ACTION_FIGURES",
    MlaToysAndGames = "MLA-TOYS_AND_GAMES",
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: CurrencyID;
    metadata:    InstallmentsMetadata;
}

export interface InstallmentsMetadata {
    meliplus_installments:    boolean;
    additional_bank_interest: boolean;
}

export enum ListingTypeID {
    GoldPro = "gold_pro",
    GoldSpecial = "gold_special",
}

export interface SalePrice {
    price_id:              string;
    amount:                number;
    conditions:            Conditions;
    currency_id:           CurrencyID;
    exchange_rate:         null;
    payment_method_prices: any[];
    payment_method_type:   PaymentMethodType;
    regular_amount:        number | null;
    type:                  SalePriceType;
    metadata:              SalePriceMetadata;
}

export interface Conditions {
    eligible:             boolean;
    context_restrictions: ContextRestriction[];
    start_time:           Date | null;
    end_time:             Date | null;
}

export enum ContextRestriction {
    ChannelMarketplace = "channel_marketplace",
}

export interface SalePriceMetadata {
    promotion_id?:                 string;
    promotion_type?:               PromotionType;
    campaign_discount_percentage?: number;
    discount_meli_amount?:         number;
    order_item_price?:             number;
    variation?:                    string;
    campaign_end_date?:            Date;
    campaign_id?:                  string;
    experiment_id?:                string;
    funding_mode?:                 string;
}

export enum PromotionType {
    Campaign = "campaign",
    Custom = "custom",
    MarketplaceCampaign = "marketplace_campaign",
}

export enum PaymentMethodType {
    Tmp = "TMP",
}

export enum SalePriceType {
    Promotion = "promotion",
    Standard = "standard",
}

export interface Seller {
    id:       number;
    nickname: string;
}

export interface Shipping {
    store_pick_up:  boolean;
    free_shipping:  boolean;
    logistic_type:  LogisticType;
    mode:           Mode;
    tags:           Tag[];
    benefits:       null;
    promise:        null;
    shipping_score: number;
}

export enum LogisticType {
    CrossDocking = "cross_docking",
    Fulfillment = "fulfillment",
    XdDropOff = "xd_drop_off",
}

export enum Mode {
    Me2 = "me2",
}

export enum Tag {
    Fulfillment = "fulfillment",
    MLACHGThresholdEne24 = "MLA-CHG-threshold-ene-24",
    MLACHGThresholdOct24 = "MLA-CHG-threshold-oct-24",
    MandatoryFreeShipping = "mandatory_free_shipping",
    MlaChThresholdAgo2023 = "MLA-CH-THRESHOLD-AGO-2023",
    SelfServiceIn = "self_service_in",
}

export enum SiteID {
    Mla = "MLA",
}

export interface VariationsDatum {
    thumbnail:              string;
    ratio:                  string;
    name:                   string;
    pictures_qty:           number;
    price:                  number;
    user_product_id:        string;
    attributes:             VariationsDatumAttribute[];
    attribute_combinations: unknown[];
}

export interface VariationsDatumAttribute {
    id:         ID;
    name:       Name;
    value_name: Value;
    value_type: string;
}
