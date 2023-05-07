import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'antd/es/button';
import Table from 'antd/es/table';
import Popconfirm from 'antd/es/popconfirm';

import { brandState$ } from '../../redux/selectors';
import { brandActions } from '../../redux/actions';
import BrandModal from '../../components/Modals/BrandModal';

const { Column } = Table;

const ManageBrands = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useDispatch();
	const brands = useSelector(brandState$);

	useEffect(() => {
		dispatch(brandActions.getBrands.getBrandsRequest());
	}, [dispatch]);

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const handlerSubmit = () => {};

	const confirm = (e) => {
		console.log(e);
	};

	return (
		<div>
			<Button type="primary" onClick={showModal}>
				Thêm brand
			</Button>
			<BrandModal
				open={isModalOpen}
				handlerCancel={handleCancel}
				handlerSubmit={handlerSubmit}
			/>
			<Table dataSource={brands} bordered rowKey="_id">
				<Column title="Thương hiệu" dataIndex="title" key="title" />
				<Column
					title="Miêu tả"
					dataIndex="description"
					key="description"
				/>
				<Column
					title=""
					key="action"
					render={(_, record) => (
						<Popconfirm
							title="Xóa thương hiệu"
							description="Bạn có chắc xóa thương hiệu này?(Kể các các sản phẩm liên quan)"
							onConfirm={() => confirm(record._id)}
							okText="Chắc chắn"
							cancelText="Hủy"
						>
							<Button type="primary" danger key="Delete">
								Xóa
							</Button>
						</Popconfirm>
					)}
				/>
			</Table>
		</div>
	);
};

export default ManageBrands;
