function objectCourse(){
    const course={courseName:"BIT",courseFee:"150000",startDate:"12.06.2018",center:"Our Office"};

    let result="Course Name:"+course.courseName + " Course" + `<br>` +"Fee: RS"+course.courseFee+ `<br>` + "Start Date: "+course.startDate+ `<br>` +"Center: "+course.center;

    return result;
}