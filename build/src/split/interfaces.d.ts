/**
 * Split Interface
 */
interface ISplit {
    readonly recipient: string;
    readonly liable: boolean;
    readonly charge_processing_fee: string;
}
/**
 * Split Recipient assume o valor total da taxa
 */
interface ISplitRecipient {
    readonly charge_recipient_processing_fee: string;
}
/**
 * Split Recipient assume o valor total da taxa
 */
interface ISplitGross {
    readonly is_gross_amount: string;
}
/**
 * Split por valor taxas do seller (principal)
 */
export interface ISplitValue extends ISplit {
    readonly amount: number;
}
/**
 * Split por valor taxas do seller (principal)
 */
export interface ISplitPercentage extends ISplit {
    readonly percentage: number;
}
/**
 * Split por valor recipient assume o valor total da taxa
 */
export interface ISplitRecipientValue extends ISplitRecipient, ISplitValue {
}
/**
 * Split por porcentagem recipient assume o valor total da taxa
 */
export interface ISplitRecipientPercentage extends ISplitRecipient, ISplitPercentage {
}
/**
 * Split por valor recipiente assume todo o valor da transacao
 */
export interface ISplitGrossValue extends ISplitGross, ISplitRecipient, ISplitValue {
}
export {};
