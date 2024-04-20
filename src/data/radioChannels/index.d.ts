export interface RadioChannel {
  type: string;
  frequency: string;
  company: string;
  programs: Program[];
}

export interface Program {
  start_time: string;
  name: string;
  url: string;
}

export interface RadioChannelsFile {
  channels: RadioChannel[];
}

