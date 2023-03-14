const questionTemplate = (
    question,
    answer,
    setAnswer
) => `<h1 className="title">${question}</h1>

<div class="input-field">
    <i class="fas fa-user"></i>
    <input
        class="changing"
        type="text"
        placeholder="Type Your Answer Here"
        name="Answer"
    />
</div>
<input type="submit" className="btn" value="Submit" />

`;

export { questionTemplate };
