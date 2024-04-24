enum priority{
    low,
    medium,
    high
}

export class RecordatoryDto {
    title: string;
    category: string;
    content: string;
    priority: priority;
    is_archived: Boolean;
    tags: JSON;
    user_id: string;
  }
  