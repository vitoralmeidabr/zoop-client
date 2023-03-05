import { IBoleto } from '../boletos';
import { IEnty, IMetadata, IQuery, PaymentType } from '../common';
import { IFeeDetails } from '../plans';
import { ICard } from '../tokens';
/**
 * Response Transaction
 */
export interface ICancelledLetter {
    readonly url?: string;
}
export interface IQueryTransaction extends IQuery {
    readonly payment_type?: string;
    readonly reference_id?: readonly string[];
    readonly status?: string;
    readonly page?: string;
}
export interface IResponseTransaction extends IEnty {
    readonly amount?: string;
    readonly app_transaction_uid?: string;
    readonly business: any;
    readonly captured?: boolean;
    readonly currency?: string;
    readonly customer?: string;
    readonly confirmed: string;
    readonly description?: string;
    readonly discounts?: string;
    readonly expected_on?: string;
    readonly fee_details?: readonly IFeeDetails[];
    readonly fees?: string;
    readonly gateway_authorizer?: string;
    readonly history: readonly IHistory[];
    readonly individual: any;
    readonly installment_plan?: string;
    readonly location_latitude: any;
    readonly location_longitude: any;
    readonly metadata?: IMetadata;
    readonly on_behalf_of?: string;
    readonly original_amount?: string;
    readonly payment_authorization?: string;
    readonly payment_method?: IPaymentMethod;
    readonly payment_type?: string;
    readonly point_of_sale?: IPointOfSale;
    readonly pre_authorization?: string;
    readonly refunded?: boolean;
    readonly refunds?: string;
    readonly rewards?: string;
    readonly sales_receipt?: string;
    readonly source?: string;
    readonly statement_descriptor?: string;
    readonly transaction_number?: string;
    readonly uri?: string;
    readonly voided?: boolean;
}
export interface IPixKey {
    readonly type?: string;
    readonly value?: string;
}
export interface IPixQrCode {
    readonly emv?: string;
}
export interface IPixMethod {
    readonly id?: string;
    readonly provider?: string;
    readonly version?: string;
    readonly type?: string;
    readonly reusable?: boolean;
    readonly allow_update?: boolean;
    readonly expiration_date?: Date;
    readonly key?: IPixKey;
    readonly pix_link?: string;
    readonly qr_code?: IPixQrCode;
}
export interface IBoletoMethod extends IBoleto {
    readonly zoop_boleto_id?: string;
    readonly payment_limit_date?: string;
}
export interface ICardMethod extends IEnty {
    readonly card_brand?: string;
    readonly description?: string;
    readonly expiration_month?: string;
    readonly expiration_year?: string;
    readonly fingerprint?: string;
    readonly first4_digits?: string;
    readonly holder_name?: string;
    readonly is_active?: boolean;
    readonly is_valid?: boolean;
    readonly is_verified?: boolean;
    readonly last4_digits?: string;
    readonly metadata?: IMetadata;
    readonly uri?: string;
}
export interface IPaymentMethod extends ICardMethod, IBoletoMethod, IPixMethod {
}
export declare enum EntryModeType {
    MANUALLY_KEYED = "manually_keyed",
    CHIP = "chip",
    BARCODE = "barcode",
    CONTACTLESS_CHIP = "contactless_chip",
    CONTACTLESS_MAGSTRIPE = "contactless_magstripe",
    MAGSTRIPE = "magstripe",
    MAGSTRIPE_FALLBACK = "magstripe_fallback"
}
export interface IPointOfSale {
    readonly entry_mode?: EntryModeType;
    readonly identification_number?: string;
}
export interface IHistory extends IEnty {
    readonly amount?: string;
    readonly authorization_code?: string;
    readonly authorization_nsu?: string;
    readonly authorizer?: string;
    readonly authorizer_id?: string;
    readonly gatewayResponseTime?: string;
    readonly operation_type?: string;
    readonly response_code?: string;
    readonly response_message?: string;
    readonly transaction?: string;
}
export interface ISource extends ICurrency {
    readonly usage?: string;
    readonly type?: string;
    readonly card?: ICard;
}
export interface IInstallment {
    readonly number_installments?: number;
}
export interface ISplitRule {
    readonly id?: string;
    readonly resource?: string;
    readonly transaction?: string;
    readonly recipient?: string;
    readonly liable?: boolean;
    readonly charge_processing_fee?: boolean | string;
    readonly charge_recipient_processing_fee?: boolean | string;
    readonly percentage?: number;
    readonly amount?: number;
    readonly is_gross_amount?: boolean;
    readonly receivable_amount?: number;
    readonly receivable_gross_amount?: number;
    readonly created_at?: string;
    readonly updated_at?: string;
}
export interface ISplitTransaction {
    readonly split_rules?: readonly ISplitRule[];
}
export interface ICapture {
    readonly statement_descriptor?: string;
    readonly capture?: boolean;
    readonly installment_plan: IInstallment;
}
export interface ICurrency {
    readonly amount?: number;
    readonly currency?: string;
}
/**
 * Transactions
 */
export interface ITransaction extends ISplitTransaction {
    readonly on_behalf_of: string;
    readonly payment_type?: PaymentType;
    readonly reference_id?: string;
}
export interface IDirectTransaction extends ICapture, ITransaction {
    readonly source: ISource;
}
export interface ICustomerTransaction extends ICapture, ICurrency, ITransaction {
    readonly customer: string;
}
export interface ICardTokenTransaction extends ICapture, ICurrency, ITransaction {
    readonly source: ISource;
}
export interface IPixTransaction extends ICurrency, ITransaction {
    readonly description?: string;
}
export interface IBoletoTransaction extends ICurrency, ITransaction {
    readonly customer: string;
    readonly description?: string;
}
