import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Tag, Popover, Space } from 'antd';

import { productsState$ } from '../../redux/selectors';
import { productActions } from '../../redux/actions';

const { Column } = Table;

const colors = {
	SUBMIT: 'processing',
	ACCEPT: 'success',
	CANCEL: 'error',
};

const ManageProducts = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useDispatch();
	const products = useSelector(productsState$);
	const isLoading = useSelector((state) => state.product.isLoading);

	useEffect(() => {
		dispatch(productActions.getProducts.getProductsRequest());
	}, [dispatch]);

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const handlerSubmit = (values) => {
		setIsModalOpen(false);
	};
	const handlerUpdateStatus = (id, status) => {
		dispatch(
			productActions.updateStatus.updateStatusRequest({
				id: id,
				data: { status },
			})
		);
	};

	return (
		<div>
			<Button type="primary" onClick={showModal}>
				Thêm sản phẩm
			</Button>

			<Table
				dataSource={products}
				bordered
				rowKey="_id"
				loading={isLoading}
				size="small"
			>
				<Column title="Tên sản phẩm" dataIndex="title" key="title" />
				<Column title="Giá" dataIndex="price" key="price" />
				<Column
					title="Thể loại"
					dataIndex={['category', 'name']}
					key="category"
				/>
				<Column
					title="Thương hiệu"
					dataIndex={['brand', 'title']}
					key="brand"
				/>
				<Column title="Lượng tồn" dataIndex="stock" key="stock" />
				<Column
					title="Trạng thái"
					key="status"
					dataIndex="status"
					render={(_, { status }) => (
						<Tag color={colors[status]}>{status}</Tag>
					)}
				/>
				<Column
					title=""
					key="action"
					render={(_, record) => (
						<Popover
							title="Chọn trạng thái"
							content={
								<Space>
									<Button
										type="primary"
										style={{
											background: '#1890ff',
											borderColor: '#1890ff',
										}}
										onClick={() =>
											handlerUpdateStatus(
												record?._id,
												'SUBMIT'
											)
										}
									>
										Chờ xác nhận
									</Button>
									<Button
										type="primary"
										style={{
											background: '#52c41a',
											borderColor: '#52c41a',
										}}
										onClick={() =>
											handlerUpdateStatus(
												record?._id,
												'ACCEPT'
											)
										}
									>
										Đã xác nhận
									</Button>
									<Button
										type="primary"
										style={{
											background: '#f5222d',
											borderColor: '#f5222d',
										}}
										onClick={() =>
											handlerUpdateStatus(
												record?._id,
												'CANCEL'
											)
										}
									>
										Đã xóa
									</Button>
								</Space>
							}
						>
							<Button>Trạng thái</Button>
						</Popover>
					)}
				/>
			</Table>
		</div>
	);
};

export default ManageProducts;
