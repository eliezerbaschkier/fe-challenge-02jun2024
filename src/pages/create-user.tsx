import React, { useState } from "react";
import { Button, Form, Input, Select, Checkbox } from "antd";
import { useRouter } from "next/router";
import { createUser } from "@/api-calls/users";
import { UserFormData } from "@/lib/types/users";

const { Option } = Select;

const CreateUser = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<UserFormData>({});
    const [form] = Form.useForm();
    const router = useRouter();

    const onFinish = async () => {
        const auth = { username: "test", password: "user" };
        try {
            createUser(formData);
            router.push("/");
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    const renderStepOne = () => (
        <>
            <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                    {
                        required: true,
                        message: "Please input your first name!",
                    },
                ]}
            >
                <Input
                    placeholder="First Name"
                    onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                    }
                />
            </Form.Item>
            <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                    { required: true, message: "Please input your last name!" },
                ]}
            >
                <Input
                    placeholder="Last Name"
                    onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                    }
                />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "Please input a valid email!" },
                ]}
            >
                <Input
                    placeholder="Email"
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
            </Form.Item>
        </>
    );

    const renderStepTwo = () => (
        <>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    { required: true, message: "Please input your password!" },
                    {
                        min: 8,
                        message: "Password must be at least 8 characters",
                    },
                ]}
            >
                <Input.Password
                    placeholder="Password"
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
            </Form.Item>
            <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: "Please input your phone number!",
                    },
                    {
                        pattern: /^\d{10}$/,
                        message:
                            "Please input a valid phone number with 10 digits",
                    },
                ]}
            >
                <Input
                    placeholder="Phone Number"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                        })
                    }
                />
            </Form.Item>
        </>
    );

    const renderStepThree = () => (
        <>
            <Form.Item
                name="role"
                label="Role"
                rules={[{ required: true, message: "Please select a role!" }]}
            >
                <Select
                    placeholder="Select a role"
                    onChange={(value) =>
                        setFormData({ ...formData, role: value })
                    }
                >
                    <Option value="user">User</Option>
                    <Option value="administrator">Administrator</Option>
                </Select>
            </Form.Item>
            <Form.Item name="preferences.receiveEmails" valuePropName="checked">
                <Checkbox
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            preferences: {
                                ...formData.preferences,
                                receiveEmails: e.target.checked,
                            },
                        })
                    }
                >
                    Receive Emails
                </Checkbox>
            </Form.Item>
            <Form.Item
                name="preferences.receiveNotifications"
                valuePropName="checked"
            >
                <Checkbox
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            preferences: {
                                ...formData.preferences,
                                receiveNotifications: e.target.checked,
                            },
                        })
                    }
                >
                    Receive Notifications
                </Checkbox>
            </Form.Item>
        </>
    );

    const renderCurrentStep = () => {
        switch (step) {
            case 1:
                return renderStepOne();
            case 2:
                return renderStepTwo();
            case 3:
                return renderStepThree();
            default:
                return renderStepOne();
        }
    };

    const handleBack = () => {
        step > 1 ? setStep(step - 1) : router.push("/");
    };

    const handleNext = async () => {
        try {
            await form.validateFields();
            setStep(step + 1);
        } catch (error) {
            console.error("Validation error:", error);
        }
    };

    const isLastStep = step === 3;
    const isNextDisabled = isLastStep ? false : !formData;
    const isSubmitDisabled = !formData;

    return (
        <div className="flex min-h-screen flex-col items-center gap-3 p-10">
            <h1>Create User</h1>
            <Form form={form} onFinish={onFinish} layout="vertical">
                {renderCurrentStep()}
                <div>
                    <Button onClick={handleBack}>Back</Button>
                    {!isLastStep && (
                        <Button onClick={handleNext} disabled={isNextDisabled}>
                            Next
                        </Button>
                    )}
                    {isLastStep && (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={isSubmitDisabled}
                        >
                            Submit
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default CreateUser;
