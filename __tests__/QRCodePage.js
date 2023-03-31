/**

File: QRCodePage.test.js
Description: This file contains the unit tests for the QRCodePage component.
The tests ensure that the component renders correctly, displays the generated QR code,
and displays an error message in case of an error.
Dependencies: React, @testing-library/react, QRCodePage
Author: Julio Nascimento
Date: 03/31/2023
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import QRCodePage from './QRCodePage';

describe('QRCodePage', () => {

// Test that the QRCodePage component renders correctly
test('renders QRCodePage component', () => {
render(<QRCodePage />);
const qrCodeText = screen.getByText('QR Code');
expect(qrCodeText).toBeInTheDocument();
});

// Test that the generated QR code is displayed
it('displays generated QR code', async () => {
const { screen } = render(<QRCodePage />);
const imgElement = await screen.findByRole('img');
expect(imgElement).toBeInTheDocument();
expect(screen.queryByRole('p')).not.toBeInTheDocument();
});

// Test that an error message is displayed in case of an error
it('displays error message', async () => {
const { screen } = render(<QRCodePage />);
const errorMessage = await screen.findByText(/error/i);
expect(errorMessage).toBeInTheDocument();
expect(screen.queryByRole('img')).not.toBeInTheDocument();
});
});