import pdf from '../resume.pdf'


export default function Resume() {

    return (
        <div className="resume-div">
            <iframe
                className="resume"
                type="file"
                src={pdf}
            />

        </div>
    )
}