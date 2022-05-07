type Stat = {
    sessions: number;
    questions_answered: number;
    questions_correct: number;
    time_spent: number;
}

export default class Stats {
    today: Stat;
    yesterday: Stat;
    week: Stat;
    month: Stat;

    constructor(data: {[key: string]: any}) {
        this.today = data.today;
        this.yesterday = data.yesterday;
        this.week = data.week;
        this.month = data.month;
    }
}