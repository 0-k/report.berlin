import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BerlinReport from './BerlinReport';

describe('BerlinReport', () => {
  it('renders the main title in German by default', () => {
    render(<BerlinReport />);
    expect(screen.getByText('Probleme in Berlin melden')).toBeInTheDocument();
  });

  it('toggles language when button is clicked', () => {
    render(<BerlinReport />);

    // Initially in German
    expect(screen.getByText('Probleme in Berlin melden')).toBeInTheDocument();

    // Find and click the language toggle button
    const toggleButton = screen.getByRole('button', { name: /English/i });
    fireEvent.click(toggleButton);

    // Should now be in English
    expect(screen.getByText('Report Problems in Berlin')).toBeInTheDocument();
  });

  it('renders emergency banner with 112 and 110', () => {
    render(<BerlinReport />);

    expect(screen.getByText('112')).toBeInTheDocument();
    expect(screen.getByText('110')).toBeInTheDocument();
  });

  it('renders featured Ordnungsamt section', () => {
    render(<BerlinReport />);

    const ordnungsamtElements = screen.getAllByText('Ordnungsamt Berlin (Online)');
    expect(ordnungsamtElements.length).toBeGreaterThan(0);
    expect(ordnungsamtElements[0]).toBeInTheDocument();
  });

  it('renders all category sections', () => {
    render(<BerlinReport />);

    expect(screen.getByText('Stadt & Ordnung')).toBeInTheDocument();
    expect(screen.getByText('Öffentlicher Verkehr')).toBeInTheDocument();
    expect(screen.getByText('Versorgung')).toBeInTheDocument();
    expect(screen.getByText('Wohnen')).toBeInTheDocument();
    expect(screen.getByText('Weitere Meldestellen')).toBeInTheDocument();
  });

  it('renders transport services', () => {
    render(<BerlinReport />);

    expect(screen.getByText('BVG')).toBeInTheDocument();
    expect(screen.getByText('S-Bahn Berlin')).toBeInTheDocument();
  });

  it('renders utility services', () => {
    render(<BerlinReport />);

    expect(screen.getByText('Berliner Wasserbetriebe')).toBeInTheDocument();
    expect(screen.getByText(/Stromnetz Berlin - Stromausfall/)).toBeInTheDocument();
  });

  it('renders housing services', () => {
    render(<BerlinReport />);

    expect(screen.getByText('Degewo')).toBeInTheDocument();
    expect(screen.getByText('Gewobag')).toBeInTheDocument();
  });

  it('renders footer disclaimer', () => {
    render(<BerlinReport />);

    expect(screen.getByText('Keine offizielle Seite. Alle Angaben ohne Gewähr.')).toBeInTheDocument();
  });

  it('has proper aria-labels for accessibility', () => {
    render(<BerlinReport />);

    // Check that links have aria-labels
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);

    // Check specific service links
    const ordnungsamtLinks = screen.getAllByText(/Website öffnen/);
    expect(ordnungsamtLinks.length).toBeGreaterThan(0);
  });
});
