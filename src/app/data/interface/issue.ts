export interface Issue {
  userinfo: string;
  location: string;
  issueSeverity: number;
  description: string;
  date?: any;
  status: string;
  comment?: Array<string>;
}
