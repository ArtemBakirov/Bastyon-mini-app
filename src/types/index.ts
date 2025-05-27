export type Mood = '😊' | '😐' | '😢';

/*export interface Quote {
  id: string;
  text: string;
  author: string;
  sourceUrl?: string;     // <-- новый параметр
  sourceTitle?: string;  // например: "Книга: Мартин Иден"
  tags?: string[];
  date: string;
}*/

export type Quote = {
  q: string;
  a: string;
  h: string
}

export interface MoodEntry {
  date: string; // YYYY-MM-DD
  mood: Mood;
}
