import React, { useState } from 'react';

const RoleNewAccessLayer = () => {
    const initialPermissions = {
        users: { view: false, add: false, edit: false, delete: false },
        chapters: { view: false, add: false, edit: false, delete: false },
        members: { view: false, add: false, edit: false, delete: false },
    };

    const [permissions, setPermissions] = useState(initialPermissions);

    // Helper: update all rows for a specific column (permission type)
    const handleSelectAllColumn = (action, checked) => {
        const updated = { ...permissions };
        Object.keys(updated).forEach((feature) => {
            updated[feature][action] = checked;
        });
        setPermissions(updated);
    };

    // Handle individual checkbox
    const handleCheckboxChange = (feature, action) => {
        setPermissions((prev) => ({
            ...prev,
            [feature]: {
                ...prev[feature],
                [action]: !prev[feature][action],
            },
        }));
    };

    // Check if all rows in a column are selected
    const isColumnChecked = (action) =>
        Object.values(permissions).every((perm) => perm[action]);

    const renderPermissionRow = (featureKey, featureName) => (
        <tr key={featureKey}>
            <td>{featureName}</td>
            {['view', 'add', 'edit', 'delete'].map((action) => (
                <td key={action}>
                    <div className="d-flex align-items-center gap-10">
                        <div className="form-check style-check d-flex align-items-center">
                            <input
                                className="form-check-input radius-4 border input-form-dark"
                                type="checkbox"
                                checked={permissions[featureKey][action]}
                                onChange={() => handleCheckboxChange(featureKey, action)}
                            />
                        </div>
                    </div>
                </td>
            ))}
        </tr>
    );

    return (
        <>
            <div className="card h-100 mb-3 p-0 radius-12">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <div className="w-50">
                        <form>
                            <div className="mb-20">
                                <label htmlFor="name" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                    Role Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control radius-8"
                                    id="name"
                                    placeholder="Enter role name"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="card h-100 p-0 radius-12">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6>Role permissions</h6>
                </div>
                <div className="card-body p-24">
                    <div className="table-responsive scroll-sm">
                        <table className="table bordered-table sm-table mb-0">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    {['view', 'add', 'edit', 'delete'].map((action) => (
                                        <th key={action}>
                                            <div className="d-flex align-items-center gap-10">
                                                <div className="form-check style-check d-flex align-items-center">
                                                    <input
                                                        className="form-check-input radius-4 border input-form-dark"
                                                        type="checkbox"
                                                        checked={isColumnChecked(action)}
                                                        onChange={(e) => handleSelectAllColumn(action, e.target.checked)}
                                                    />
                                                </div>
                                                {action.charAt(0).toUpperCase() + action.slice(1)}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {renderPermissionRow('users', 'Users')}
                                {renderPermissionRow('chapters', 'Chapters')}
                                {renderPermissionRow('members', 'Members')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoleNewAccessLayer;
