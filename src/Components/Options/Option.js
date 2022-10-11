

const Option = ({ option, answer }) => {


    return (
        <div>
            <div className=' p-4  border-solied border-2 font-semibold border-indigo-800 rounded-lg'>
                <p> <input type="radio" onClick={() => answer(option)} name="radio-1" className="radio border border-black" /> {option} </p>
            </div>

        </div>

    );
};

export default Option;