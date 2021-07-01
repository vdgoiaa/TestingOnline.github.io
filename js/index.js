/**
 * PROJECT: Trắc nghiệm online
 *   1. Chức năng cơ bản:
 *      Hiện danh sách câu hỏi
 *      Chấm điểm
 *   2. Lên mockup
 *   3. Phân tích lớp đối tượng
 */

let questionList = [];

const fetchQuestions = () => {
    axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET",
        })
        .then(function(res) {
            console.log(res.data);
            questionList = mapData(res.data);
            renderQuestions(questionList);
        })
        .catch(function(err) {
            console.log(err);
        });
};

const handleSubmit = () => {
    let result = 0;
    for (let item of questionList) {
        if (item.checkExact() === true) {
            result++;
        }
    }
    alert('Số câu đúng là :' + result + "/" + questionList.length);

};

const renderQuestions = (data) => {
    let content = "";
    for (let i in data) {
        content += data[i].render(+i + 1);
    }
    document.getElementById("questions").innerHTML = content;
};

const mapData = (data) => {
    // const mappedData = [];

    // for (let item of data) {
    //     const { questionType, id, content, answers } = item;

    //     if (item.questionType === 1) {
    //         mappedData.push(new MutipleChoice(id, questionType, content, answers));
    //     } else {
    //         mappedData.push(new FillInBlank(id, questionType, content, answers));
    //     }
    // }
    // console.log(mappedData);
    const mappedData = data.map((item) => {
        const { questionType, id, content, answers } = item;
        if (item.questionType === 1) {
            return new MutipleChoice(id, questionType, content, answers);
        }
        return new FillInBlank(id, questionType, content, answers);
    });

    return mappedData;
};
fetchQuestions();

// Demo Map Function

// var a = ["Gia", "Trân", "Hân"];
// // => b = ["A Gia","A Trân","A Hân"]

// console.log(a.map((item) => {
//     return "A " + item;
// }));