import React, { useEffect, useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

export default function AccordionComponent({ userData, categories }) {
    return (
        <ul className="accordion">
            {categories.map((category) => {
                return (
                    <AccordionItem
                        userData={userData}
                        category={category.category}
                        id={category.id}
                        key={category.id}
                    />
                );
            })}
        </ul>
    );
}
