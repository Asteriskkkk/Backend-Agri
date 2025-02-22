import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const url = "https://krishiconnect.onrender.com"

const SchemeFilters = () => {
    const navigate = useNavigate();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        state: '',
        beneficiaryType: '',
        schemeType: '',
        applicationType: '',
        tags: '',
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [schemes, setSchemes] = useState([]);

    // Count active filters
    const activeFilterCount = Object.values(filters).filter(value => value !== '').length;

    useEffect(() => {
        const fetchSchemes = async () => {
            try {
                const response = await axios.get(`${url}/schemes`);
                setSchemes(response.data);
            } catch (error) {
                console.error("Error fetching schemes:", error);
            }
        };

        fetchSchemes();
    }, []);

    const filterOptions = {
        state: ['All India'],
        beneficiaryType: [
            'Individual Farmers',
            'Tenant Farmers',
            'Small/Marginal Farmers',
            'Cooperatives',
            'FPOs',
            'Agribusinesses',
            'Self Help Groups',
            'Joint Liability Groups'
        ],
        schemeType: [
            'Direct Benefit Transfer',
            'Insurance Schemes',
            'Credit Schemes',
            'Infrastructure Development',
            'Capacity Building',
            'Technical Support'
        ],
        applicationType: [
            'Online',
            'Offline',
            'Online & Offline'
        ],
        tags: [
            'Agriculture',
            'Financial Assistance',
            'Insurance',
            'Credit',
            'Organic Farming',
            'Infrastructure',
            'Storage',
            'Entrepreneurship',
            'Soil Health',
            'Farmers',
            'Crop Protection'
        ]
    };

    // Labels for each filter type
    const filterLabels = {
        state: 'State',
        beneficiaryType: 'Beneficiary Type',
        schemeType: 'Scheme Type',
        applicationType: 'Application Type',
        tags: 'Categories'
    };

    // Remove individual filter
    const removeFilter = (filterKey) => {
        setFilters(prev => ({
            ...prev,
            [filterKey]: ''
        }));
    };

    const FilterSelect = ({ name, label, options }) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <select
                className="w-full p-2 border rounded-md bg-white"
                value={filters[name]}
                onChange={(e) => setFilters({ ...filters, [name]: e.target.value })}
            >
                <option value="">All {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );

    // Component to display active filters
    const ActiveFilters = () => (
        <div className="flex flex-wrap gap-2 mb-4">
            {Object.entries(filters).map(([key, value]) => {
                if (!value) return null;
                return (
                    <div 
                        key={key}
                        className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                    >
                        <span>{filterLabels[key]}: {value}</span>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                removeFilter(key);
                            }}
                            className="hover:text-green-900"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                );
            })}
        </div>
    );

    const filteredSchemes = schemes.filter(scheme => {
        const matchesSearch = searchQuery === '' || 
            scheme.title.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesFilters = Object.entries(filters).every(([key, value]) => {
            if (!value) return true;
            
            switch (key) {
                case 'tags':
                    return scheme.tags.some(tag => 
                        tag.toLowerCase() === value.toLowerCase()
                    );
                case 'state':
                    return scheme.state === value;
                case 'applicationType':
                    return scheme.application_process && 
                           scheme.application_process.type === value;
                case 'schemeType':
                    return scheme.scheme_type === value;
                case 'beneficiaryType':
                    return scheme.beneficiary_type === value;
                default:
                    return true;
            }
        });

        return matchesSearch && matchesFilters;
    });

    const FilterPanel = () => (
        <div className="bg-white rounded-lg shadow">
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <button 
                        className="text-green-600 text-sm"
                        onClick={() => setFilters({
                            state: '',
                            beneficiaryType: '',
                            schemeType: '',
                            applicationType: '',
                            tags: '',
                        })}
                    >
                        Reset Filters
                    </button>
                    {activeFilterCount > 0 && (
                        <span className="text-sm text-gray-600">
                            {activeFilterCount} active filter{activeFilterCount !== 1 ? 's' : ''}
                        </span>
                    )}
                </div>
                <FilterSelect name="state" label="State" options={filterOptions.state} />
                <FilterSelect name="beneficiaryType" label="Beneficiary Type" options={filterOptions.beneficiaryType} />
                <FilterSelect name="schemeType" label="Scheme Type" options={filterOptions.schemeType} />
                <FilterSelect name="applicationType" label="Application Type" options={filterOptions.applicationType} />
                <FilterSelect name="tags" label="Categories" options={filterOptions.tags} />
            </div>
        </div>
    );

    return (
        <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Desktop Filter Sidebar */}
                <div className="hidden md:block w-64">
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-lg font-semibold mb-4">Filter By</h2>
                        <FilterPanel />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="mb-6 space-y-4">
                        {/* Search and Filter Button for Mobile */}
                        <div className="flex gap-2">
                            <input
                                type="search"
                                placeholder="Search schemes..."
                                className="flex-1 p-2 border rounded-md"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                className="md:hidden flex items-center gap-2 bg-white border rounded-md px-4 py-2"
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                            >
                                Filters
                                {activeFilterCount > 0 && (
                                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">
                                        {activeFilterCount}
                                    </span>
                                )}
                                {isFilterOpen ? (
                                    <ChevronUp className="h-4 w-4" />
                                ) : (
                                    <ChevronDown className="h-4 w-4" />
                                )}
                            </button>
                        </div>

                        {/* Active Filters Display */}
                        {activeFilterCount > 0 && <ActiveFilters />}

                        {/* Mobile Filter Dropdown */}
                        <div className={`md:hidden transition-all duration-300 ease-in-out ${
                            isFilterOpen 
                                ? 'max-h-screen opacity-100 visible'
                                : 'max-h-0 opacity-0 invisible'
                        }`}>
                            <FilterPanel />
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-4 text-gray-600">
                        Found {filteredSchemes.length} scheme{filteredSchemes.length !== 1 ? 's' : ''}
                    </div>

                    {/* Schemes List */}
                    <div className="space-y-4">
                        {filteredSchemes.map((scheme) => (
                            <div 
                                key={scheme.id}
                                className="p-4 md:p-6 bg-white rounded-lg shadow cursor-pointer"
                                onClick={() => navigate(`/search/${scheme.id}`)}
                            >
                                <h3 className="text-lg font-semibold">{scheme.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{scheme.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {scheme.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 text-xs md:text-sm text-green-700 border border-green-700 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchemeFilters;