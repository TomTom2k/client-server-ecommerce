import React from 'react';
import { Button, Form, Input, Modal, Space } from 'antd';

const Field = ({ label, name, rules, input, ...passPros }) => (
	<Form.Item
		label={label}
		name={name}
		labelCol={{
			span: 8,
		}}
		wrapperCol={{
			span: 16,
		}}
		labelAlign="left"
		rules={rules}
		{...passPros}
	>
		{input}
	</Form.Item>
);

const CategoryModal = ({ open = false, handlerSubmit, handlerCancel }) => {
	const [form] = Form.useForm();
	const onFinish = (values) => {
		handlerSubmit(values);
		form.resetFields();
	};
	return (
		<Modal
			title="Thêm thương hiệu"
			open={open}
			closable={false}
			footer={null}
		>
			<Form name="basic" onFinish={handlerSubmit} form={form}>
				<Field
					label="Thể loại"
					name="name"
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập thể loại!',
						},
					]}
					input={<Input />}
				/>

				<Field
					label="Miêu tả"
					name="description"
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập miêu tả!',
						},
					]}
					input={<Input />}
				/>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Space>
						<Button type="primary" htmlType="submit">
							Thêm mới
						</Button>
						<Button htmlType="button" onClick={handlerCancel}>
							Hủy
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default CategoryModal;
