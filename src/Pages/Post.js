import React from 'react';
import { useParams } from 'react-router';
export default function Post() {
    console.log(useParams());
    const par = useParams()
    return (
        <div>
            ID is {par.id}
        </div>
    )
}