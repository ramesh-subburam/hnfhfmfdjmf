import React from 'react';
import { Shield, AlertTriangle, Eye, Wind } from 'lucide-react';

const guidelines = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Read Instructions",
    description: "Carefully read and follow all product instructions before use"
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Safe Distance",
    description: "Maintain recommended safety distances for each product type"
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Adult Supervision",
    description: "Never allow children to handle fireworks without adult supervision"
  },
  {
    icon: <Wind className="h-6 w-6" />,
    title: "Weather Conditions",
    description: "Check weather conditions and avoid use during high winds"
  }
];

export default function SafetyGuidelines() {
  return (
    <section className="bg-gray-50 py-16" id="safety">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Safety First</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guidelines.map((guideline, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="text-red-600 mb-4">{guideline.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{guideline.title}</h3>
              <p className="text-gray-600">{guideline.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#safety-pdf"
            className="inline-flex items-center text-red-600 hover:text-red-700"
          >
            Download Complete Safety Guide (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}