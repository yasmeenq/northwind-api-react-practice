class AppConfig {
	public readonly productsUrl = "http://localhost:3030/delay/api/products/";
    public readonly workersUrl = "http://localhost:3030/api/employees/";
    public readonly loginUrl = "http://localhost:3030/api/login/";
    public readonly registerUrl = "http://localhost:3030/api/register/";
}

export const appConfig = new AppConfig();
