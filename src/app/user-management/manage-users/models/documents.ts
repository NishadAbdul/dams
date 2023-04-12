import { NgxDropzoneComponent } from "ngx-dropzone";

export class DocumentsList {
    public documentTypeId?: string = '';
    public documentTypeName?: string = '';
    public isRequired?: boolean = true;
    public documentId?: number = 0;
    public fileName?: string = '';
    public documentDescription?: string = '';
    public stipulationId?: number = 0;
    public description?: string = '';
    public stipulationIdentifier?: string = '';
}

export class DropzoneUploadItem {
    public addedFiles: File[]
    public rejectedFiles: File[]
    public source: NgxDropzoneComponent;
}

export class RejectedFileItem {
    public reason?: string;
    public lastModified?: number;
    public lastModifiedDate?: Date;
    public name: string;
    public size: number;
    public type: string;
    public webkitRelativePath?: string;
}

export interface ReturnDataItem {
    skipValidation: boolean;
    documents: DocumentFormValue[];
    isStipulationExists?: boolean;
}

export class DocumentFormValue {
    public document: string;
    public documentDescription: string;
    public documentTypeId: string;
    public fileName: string;
    public isDocumentExists: boolean;
    public isRequired: boolean;
    public size: number;
    public fileStorage?: File[];
    public documentTypeName?: string;
    public stipulationId?: number;
}

export class DocumentSendPayload {
    public documents: DocumentFormValue[]
    public skipValidation: boolean;
}

export class SuccessResponse {
    public applicationIdentifier: string;
    public documentValidStatus: DocumentStatus[]
}

export class DocumentStatus {
    public documentTypeId: Number;
    public isDocumentValid: boolean;
}