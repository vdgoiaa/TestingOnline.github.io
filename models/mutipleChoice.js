class MutipleChoice extends Question {
    constructor(id, type, content, answers) {
        super(id, type, content, answers)
    }
    checkExact() {
        // 1.check xem người dùng chọn input nào thì lấy id của đáp án đó
        let answerId;
        const answerInputs = document.getElementsByClassName("answers-" + this.id);
        for (let answerInput of answerInputs) {
            if (answerInput.checked === true) {
                answerId = answerInput.value;

            }

        }

        // 2.check người dùng có chọn đáp án hay ko. nếu ko chọn => false
        if (answerId === undefined) return false;

        // 3.dựa vào id lấy đc . tìm ra đối tượng trong ds đáp án => exact
        const foundedAnser = this.answers.find(item => {
            return item.id === answerId;
        });
        return foundedAnser.exact;

    }

    // return html tương ứng của loại câu hỏi mutiple choice
    render(index) {
        let answersHTML = "";

        for (let item of this.answers) {
            answersHTML += `
            <div>
                <input value="${item.id}" class="answers-${this.id}" type=radio name="answers-${this.id}" />
                <label>${item.content}</label>
            </div>
            `;

        }
        return `
        <h5>Câu hỏi ${index} : ${this.content}</h5>
        ${answersHTML}

        `;
    }
}

// const newQuestion = new MutipleChoice("1", "1", "Hôm nay là thứ mấy ?", [
//     { content: "Thứ 2" },
//     { content: "Thứ 7" },
//     { content: "Thứ 5" },
//     { content: "CN" },
// ]);
// console.log(newQuestion);