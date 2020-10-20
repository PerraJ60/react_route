import React from 'react';
/* 
 Testing forwardRef
*/
function Input({type, id, onKeyDown, placeholder}, ref) {
    return (
        <input 
            type={type}
            id={id}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            ref={ref}
        />
    );
}
const forwardInput = React.forwardRef(Input);
export default forwardInput;