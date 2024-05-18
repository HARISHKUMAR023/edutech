import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { getCourseById, getAllCourseIds, Course } from '../../lib/courses';

interface CoursePageProps {
  course: Course | null;
}

const CoursePage: NextPage<CoursePageProps> = ({ course }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      {/* Render other course details */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const course = await getCourseById(params?.id as string);

  if (!course) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      course,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCourseIds();
  return {
    paths,
    fallback: true, // or 'blocking'
  };
};

export default CoursePage;
