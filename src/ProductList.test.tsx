import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductList } from './ProductList';
import React from 'react'

describe('ProductList', () => {
    it('should render product 1', () => {
        render(<ProductList />)

        expect(screen.getByTestId('product-1')).toBeVisible()
        expect(screen.getByTestId('product-1').textContent).toBe("Product 1")
    })
})