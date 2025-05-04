import React from 'react';

const PeopleList = ({ mainTitle, items, customStyles = {}, customClasses = {} }) => {
    return (
        <div className={`${customClasses.container}`}>
            <h3 style={customStyles.mainTitle} className={customClasses.mainTitle}>{mainTitle}</h3>
            {items.map((item, index) => (
                <div key={index} className={`mb-5 ${customClasses.item}`}>
                    <h4 style={customStyles.subTitle} className={customClasses.subTitle}>{item.subTitle}</h4>
                    {item.subSubTitles.map((subSubItem, subIndex) => (
                        <div key={subIndex}>
                            <h5 style={customStyles.subSubTitle} className={customClasses.subSubTitle}>{subSubItem.title}</h5>
                            <ul style={customStyles.unorderedList} className={`${customClasses.unorderedList}`}>
                                {subSubItem.people.map((person, personIndex) => (
                                    <li style={customStyles.listItem} className={customClasses.listItem} key={personIndex}>
                                        <h6 className='fs-5' style={{ color: "#4338ca" }}>
                                            {person.name}
                                        </h6>
                                        <p>{person.designation}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default PeopleList;
