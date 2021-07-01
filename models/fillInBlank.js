class FillInBlank extends Question {
    constructor(id, type, content, answers) {
        super(id, type, content, answers)
    }
    checkExact() {
        const userAnswer = document.getElementById("answer-" + this.id).value;
        return userAnswer.toLowerCase() === this.answers[0].content.toLowerCase();
    }

    render(index) {
        // let answersHTML = "";
        // for (let item of this.answers) {
        //     answersHTML += `
        //     <div>
        //         <form>
        //              <input type="text" placeholder="Điền câu trả lời"/>
        //         </form>
        //     </div>
        //     `;

        // }
        // return `
        // <h5>Câu hỏi : ${this.content}</h5>
        // `
        return `
              <div>
                  <h3>Câu hỏi ${index}: ${this.content} </h3>
                  <input id="answer-${this.id}" />
              </div>
            `;
    }
}