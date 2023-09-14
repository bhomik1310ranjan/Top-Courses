import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function CourseCard(props) {
    const courseData = props.courseData;
    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;

    function likeDislikeCourseHandler() {
        if (likedCourses.includes(courseData.id)) {
            setLikedCourses((previouslyLikedCourses) =>
                previouslyLikedCourses.filter((id) => id !== courseData.id)
            );
            toast.warning("Like removed");
        } else {
            // if (likedCourses.length === 0) {
            //     setLikedCourses([courseData.id]);
            // } else {
            //     setLikedCourses((previouslyLikedCourses) => [
            //         ...previouslyLikedCourses,
            //         courseData.id,
            //     ]);
            // }
            setLikedCourses((previouslyLikedCourses) => [
                ...previouslyLikedCourses,
                courseData.id,
            ]);
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="max-w-xs bg-darkDesaturatedBlue bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img
                    src={courseData.image.url}
                    alt={courseData.image.alt}
                    className="w-full object-cover"
                />
                <button
                    onClick={likeDislikeCourseHandler}
                    className="w-10 aspect-square rounded-full bg-white flex justify-center items-center absolute -bottom-3 right-2"
                >
                    {likedCourses.includes(courseData.id) ? (
                        <FcLike className="text-3xl" />
                    ) : (
                        <FcLikePlaceholder className="text-3xl" />
                    )}
                </button>
            </div>
            <div className="p-4">
                <h4 className="font-semibold text-lg text-white leading-6 tracking-wider">
                    {courseData.title}
                </h4>
                <p className="text-white pt-2">
                    {courseData.description.length > 100
                        ? `${courseData.description.substring(0, 100)}...`
                        : courseData.description}
                </p>
            </div>
        </div>
    );
}

export default CourseCard;
