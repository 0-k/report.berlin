import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import EmergencyBanner from './EmergencyBanner';

describe('EmergencyBanner', () => {
  it('renders emergency title in German', () => {
    render(<EmergencyBanner lang="de" />);

    expect(screen.getByText('🚨 NOTFALL?')).toBeInTheDocument();
    expect(
      screen.getByText('Diese Seite ist für nicht-dringende Anliegen. Bei Notfällen:')
    ).toBeInTheDocument();
  });

  it('renders emergency title in English', () => {
    render(<EmergencyBanner lang="en" />);

    expect(screen.getByText('🚨 EMERGENCY?')).toBeInTheDocument();
    expect(screen.getByText('This page is for non-emergency issues. In emergencies:')).toBeInTheDocument();
  });

  it('renders 112 emergency number with correct link', () => {
    render(<EmergencyBanner lang="de" />);

    const link112 = screen.getByRole('link', { name: /112/ });
    expect(link112).toHaveAttribute('href', 'tel:112');
    expect(screen.getByText('Feuerwehr & Rettungsdienst')).toBeInTheDocument();
  });

  it('renders 110 police number with correct link', () => {
    render(<EmergencyBanner lang="de" />);

    const link110 = screen.getByRole('link', { name: /110/ });
    expect(link110).toHaveAttribute('href', 'tel:110');
    expect(screen.getByText('Polizei')).toBeInTheDocument();
  });

  it('displays English labels for emergency services', () => {
    render(<EmergencyBanner lang="en" />);

    expect(screen.getByText('Fire & Ambulance')).toBeInTheDocument();
    expect(screen.getByText('Police')).toBeInTheDocument();
    expect(screen.getByText('Life-threatening situations')).toBeInTheDocument();
    expect(screen.getByText('Crimes & Dangerous Situations')).toBeInTheDocument();
  });
});
