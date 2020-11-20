import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

describe ('Testing component', () => {

    //Test rendering correctly
    it ('renders correctly', () =>{
        const {queryByTestId, queryByPlaceholderName} = render(<Search/>);
        expect(queryByTestId('search-button')).toBeTruthy();
    })

    //Testing some event
    it('updates on change', () => {
        const  {queryByPlaceholderText} = render(<Search/>);
        const searchInput = queryByPlaceholderText('Search');
        fireEvent.change(searchInput, {target: {value: 'test'}});
        expect(searchInput.value).toBe('test');
    })
    afterAll(() =>{
        console.log('Finished!');
    })
})