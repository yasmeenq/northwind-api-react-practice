class AppConfig {
	public readonly productsUrl = "http://localhost:3030/delay/api/products/";
    public readonly workersUrl = "http://localhost:3030/api/employees/";
    public readonly login = "http://localhost:3030/api/login/";
}

export const appConfig = new AppConfig();
