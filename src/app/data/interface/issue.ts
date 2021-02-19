export interface Issue {
  id: number,
  userinfo: string;
  location: string;
  issueSeverity: number;
  description: string;
  date?: any;
  status: string;
  comment?: Array<string>;
}
