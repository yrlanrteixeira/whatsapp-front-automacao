export interface CreateGroupFormData {
  groupName: string;
  names: string[];
  description?: string;
  admins?: string[];
  setInfoAdminsOnly?: boolean;
}

export interface CreateMultipleGroupsFormData {
  groupNames: string[];
  names: string[];
  minInterval: number;
  maxInterval: number;
  description?: string;
  admins?: string[];
  setInfoAdminsOnly?: boolean;
}

export interface SendMessageFormData {
  names: string[];
  message: string;
}

export interface SendMessageAndPollFormData {
  names: string[];
  message: string;
  pollQuestion: string;
  pollOptions: string[];
  allowMultipleAnswers: boolean;
}

export interface SendPollFormData {
  names: string[];
  pollQuestion: string;
  pollOptions: string;
  allowMultipleAnswers: boolean;
}
