import React from 'react';
import { Button, Checkbox, Form, Input, Modal } from 'antd';

const BrandModal = ({ open = false, handlerSubmit, handlerCancel }) => {
	return (
		<Modal
			title="Thêm thương hiệu"
			open={open}
			closable={false}
			footer={[
				<Button key="back" onClick={handlerCancel}>
					Hủy
				</Button>,
				<Button key="submit" type="primary" onClick={handlerSubmit}>
					Thêm
				</Button>,
			]}
		>
			<Form name="basic">
				<Form.Item
					label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Mô tả"
					name="description"
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default BrandModal;
