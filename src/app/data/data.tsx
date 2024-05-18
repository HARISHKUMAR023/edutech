const courses = [
    { id: 'course1', title: 'Course 1', description: 'Description of Course 1' },
    { id: 'course2', title: 'Course 2', description: 'Description of Course 2' },
    // Add more courses as needed
  ];
  
  export interface Course {
    id: string;
    title: string;
    description: string;
  }
  
  export async function getCourseById(id: string): Promise<Course | null> {
    return courses.find(course => course.id === id) || null;
  }
  
  export async function getAllCourseIds() {
    return courses.map(course => ({
      params: { courseId: course.id },
    }));
  }
  
  export async function getAllCourses(): Promise<Course[]> {
    return courses;
  }
  