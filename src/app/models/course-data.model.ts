export interface CourseData {
    id: number;
    name: string;
    desc: string;
}

export function courseData() {
    return{
        id: 0,
        name: '',
        desc: '',
    }
}
