import Select from 'react-select';
import { useState } from 'react';
import styled from "styled-components";

const options = [
    { value: 'programming', label: 'Programming' },
    { value: 'web development', label: 'Web development' },
    { value: 'networking', label: 'Networking' },
    { value: 'computer repair and maintenace', label: 'Computer repair and maintenace' },
    { value: 'android/IOS', label: 'Android/IOS' },
    { value: 'phone and technology', label: 'Phone and Technology' },
];

const SelectStyle = {
    valueContainer: (provided) => ({
        ...provided,
        // height: "33px ",
        display: "flex",
        alignItems: "center",
    }),
    control: (provided, state) => ({
        ...provided,
        width: "100%",
        marginTop: "5px",
        height: "100%",
        background: "#f5f5f5",
        border: "none",
        borderRadius: "10px",
        outline: "none",
        marginBottom: "10px",
        boxShadow: state.isFocused ? "none" : 0,
    }),
    option: (provided, state) => ({
        ...provided,
        fontFamily: "Poppins",
        display: "flex",
        justifyContent: "center",
        textALign: "center",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "12px",
        paddingLeft: "10px",
        // zIndex: 100000,
        color: state.isSelected ? "#ffffff" : "rgba(0,0,0,0.9)",
    }),

    singleValue: (provided) => ({
        ...provided,
        color: "#9E9E9E",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "12px",
        letterSpacing: "0.06em",
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#9E9E9E",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "12px",
        letterSpacing: "0.06em",
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: "none",
    }),
};

const CateInputs = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <CateDiv>
            <div className="input-group">
                <label htmlFor="topic-title">Title</label>
                <input type="text" name="topic-title" id="topic-title" placeholder="Topic title" />
            </div>
            <div className="input-group">
                <label htmlFor="category">Add category</label>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    styles={SelectStyle}
                    id="category"
                    placeholder="Select a category"
                    name="category"
                />
            </div>
            <div className="input-group">
                <label htmlFor="topic-description">Description</label>
                <textarea name="topic-description" id="topic-description" placeholder="Enter a description" />
            </div>
        </CateDiv>
    );
};

const CateDiv = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    width: 400px;
    .input-group {
        padding: 5px;
        label {
            text-align: justify !important;
            font-family: Poppins;
        }
        input {
            margin-top: 5px;
            display: block;
            width: 100%;
            background: #f5f5f5;
            border: none;
            border-radius: 10px;
            font-family: Poppins;
            outline: none;
            margin-bottom: 10px;
            padding: 12px
        }
        textarea {
            margin-top: 5px;
            display: block;
            width: 100%;
            background: #f5f5f5;
            border: none;
            border-radius: 10px;
            font-family: Poppins;
            outline: none;
            margin-bottom: 10px;
            padding: 15px
        }
    }
`;

export default CateInputs;