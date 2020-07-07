export interface IUserInput {
    SearchQuery: (string | null);
}

export interface IStatus {
    Msg: (string | null);
    Success: (Boolean);
    TextDisplay: "inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error" | undefined;
}

export interface IUrlCache {
    [propName: number]: string;
}