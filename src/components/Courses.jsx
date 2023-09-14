import { useState } from "react";
import CourseCard from "./CourseCard.jsx";

function Courses(props) {
    const data = props.data;
    const category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category === "All") {
            const allCourses = [];
            Object.values(data).forEach((array) => {
                array.forEach((course) => {
                    allCourses.push(course);
                });
            });
            return allCourses;
        } else {
            return data[category];
        }
    }

    return (
        <div className="w-11/12 max-w-5xl mx-auto flex flex-wrap justify-center gap-5 pb-4">
            {getCourses().map((courseData) => {
                return (
                    <CourseCard
                        key={courseData.id}
                        courseData={courseData}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />
                );
            })}
        </div>
    );
}

export default Courses;
