import Layout from '../../components/Layout';
import withAdmin from '../withAdmin';
import Link from 'next/link';

const Admin = ({ user }) => (
    <Layout>
        <h1>Admin Dashboard</h1>
        <br />
        <div className=" jumbotron row">
            <div className="col-md-4">
                <ul className="nav flex-column">
                    <li className="nav-item">
                    <h3><a href="/admin/category/create" className="nav-link text-primary">
                            Create category
                        </a></h3>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/category/read">
                            <h3><a className="nav-link text-danger">All categories</a></h3>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/link/read">
                            <h3><a className="nav-link text-success">All Links</a></h3>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/user/profile/update">
                           <h3> <a className="nav-link text-warning">Profile update</a></h3>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-8"></div>
        </div>
    </Layout>
);

export default withAdmin(Admin);
