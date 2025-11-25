import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Wrench } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Service } from '../types';

describe('ServiceCard', () => {
  const mockService: Service = {
    name: 'Test Service',
    desc: 'This is a test service description',
    url: 'https://example.com',
  };

  it('renders service name and description', () => {
    render(<ServiceCard service={mockService} icon={Wrench} lang="en" />);

    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('This is a test service description')).toBeInTheDocument();
  });

  it('renders website link when url is provided', () => {
    render(<ServiceCard service={mockService} icon={Wrench} lang="en" />);

    const link = screen.getByRole('link', { name: /Open website for Test Service/i });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders phone link when phone is provided', () => {
    const serviceWithPhone: Service = {
      name: 'Emergency Service',
      desc: 'Emergency description',
      phone: '112',
    };

    render(<ServiceCard service={serviceWithPhone} icon={Wrench} lang="en" />);

    const phoneLink = screen.getByRole('link', { name: /Call Emergency Service: 112/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:112');
  });

  it('renders emergency notice when provided', () => {
    const serviceWithEmergency: Service = {
      name: 'Gas Service',
      desc: 'Gas emergency',
      url: 'https://example.com',
      emergency: 'Emergency: 030 123 456',
    };

    render(<ServiceCard service={serviceWithEmergency} icon={Wrench} lang="de" />);

    expect(screen.getByText('Emergency: 030 123 456')).toBeInTheDocument();
  });

  it('applies emergency styling when emergency prop is true', () => {
    const { container } = render(
      <ServiceCard service={mockService} icon={Wrench} lang="en" emergency={true} />
    );

    const card = container.querySelector('.border-red-500');
    expect(card).toBeInTheDocument();
  });

  it('displays German text when lang is de', () => {
    render(<ServiceCard service={mockService} icon={Wrench} lang="de" />);

    expect(screen.getByText('Website öffnen →')).toBeInTheDocument();
  });

  it('displays English text when lang is en', () => {
    render(<ServiceCard service={mockService} icon={Wrench} lang="en" />);

    expect(screen.getByText('Open Website →')).toBeInTheDocument();
  });
});
